const PREFIX = 'mongoosebconnection:';

export const base64 = (str) => (new Buffer(str, 'ascii')).toString('base64');
export const unbase64 = (b64) => (new Buffer(b64, 'base64')).toString('ascii');

export function cursorToOffset(cursor) {
  return parseInt(unbase64(cursor).substring(PREFIX.length), 10);
}

export function offsetToCursor(offset) {
  return base64(PREFIX + offset);
}

export function getOffsetWithDefault(cursor, defaultOffset) {
  if (cursor === undefined) {
    return defaultOffset;
  }
  const offset = cursorToOffset(cursor);
  return isNaN(offset) ? defaultOffset : offset;
}

export async function connectionFromMongooseQuery(query, args = {}, mapper, transform) {
  const mongooseQuery = query;
  const { after, before, first, last } = args;
  const count = await mongooseQuery.count();
  const beforeOffset = getOffsetWithDefault(before, count);
  const afterOffset = getOffsetWithDefault(after, -1);

  let startOffset = Math.max(-1, afterOffset) + 1;
  let endOffset = Math.min(count, beforeOffset);

  if (first !== undefined) {
    endOffset = Math.min(endOffset, startOffset + first);
  }

  if (last !== undefined) {
    startOffset = Math.min(startOffset, endOffset - last);
  }

  const skip = Math.max(startOffset, 0);
  const limit = endOffset - startOffset;

  mongooseQuery.skip(skip);
  mongooseQuery.limit(limit);

  let slice;
  if (limit === 0) {
    slice = [];
  }
  else {
    const res = await mongooseQuery.find();
    slice = res;
  }

  if (typeof transform === 'function') {
    slice = slice.map(transform)[0];
  }

  if (typeof mapper === 'function') {
    slice = slice.map(mapper);
  }

  const edges = slice.map((value, index) => ({
    cursor: offsetToCursor(startOffset + index),
    node: value,
  }));


  const firstEdge = edges[0];
  const lastEdge = edges[edges.length - 1];
  const lowerBound = after ? (afterOffset + 1) : 0;
  const upperBound = before ? Math.min(beforeOffset, count) : count;

  return {
    edges,
    pageInfo: {
      startCursor: firstEdge ? firstEdge.cursor : null,
      endCursor: lastEdge ? lastEdge.cursor : null,
      hasPreviousPage: last !== null ? startOffset > lowerBound : false,
      hasNextPage: first !== null ? endOffset < upperBound : false,
    },
  };
}

function cloneAggregation(aggr) {
  /* eslint-disable no-underscore-dangle */
  const model = aggr._model.model(aggr._model.modelName);
  return model.aggregate(aggr._pipeline);
  /* eslint-enable no-underscore-dangle */
}

export async function connectionFromMongooseAggregate(aggr, args = {}, mapper, transform) {
  const mongooseAggr = cloneAggregation(aggr);
  const countAggr = cloneAggregation(aggr);
  const { after, before, first, last } = args;
  const countArr = await countAggr.group({ _id: null, count: { $sum: 1 } });
  const count = countArr.length > 0 && countArr[0].count ? countArr[0].count : 0;
  const beforeOffset = getOffsetWithDefault(before, count);
  const afterOffset = getOffsetWithDefault(after, -1);

  let startOffset = Math.max(-1, afterOffset) + 1;
  let endOffset = Math.min(count, beforeOffset);

  if (first !== undefined) {
    endOffset = Math.min(endOffset, startOffset + first);
  }

  if (last !== undefined) {
    startOffset = Math.min(startOffset, endOffset - last);
  }

  const skip = Math.max(startOffset, 0);
  const limit = endOffset - startOffset;

  mongooseAggr.skip(skip);
  mongooseAggr.limit(limit);

  let slice;
  if (limit === 0) {
    slice = [];
  }
  else {
    const res = await mongooseAggr.exec();
    slice = res;
  }

  if (typeof mapper === 'function') {
    slice = slice.map(transform)[0];
  }

  if (typeof mapper === 'function') {
    slice = slice.map(mapper);
  }

  const edges = slice.map((value, index) => ({
    cursor: offsetToCursor(startOffset + index),
    node: value,
  }));

  const firstEdge = edges[0];
  const lastEdge = edges[edges.length - 1];
  const lowerBound = after ? (afterOffset + 1) : 0;
  const upperBound = before ? Math.min(beforeOffset, count) : count;

  return {
    edges,
    pageInfo: {
      startCursor: firstEdge ? firstEdge.cursor : null,
      endCursor: lastEdge ? lastEdge.cursor : null,
      hasPreviousPage: last !== null ? startOffset > lowerBound : false,
      hasNextPage: first !== null ? endOffset < upperBound : false,
    },
  };
}
