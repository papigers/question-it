import shortid from 'short-mongo-id';

export function hrefMiddleware(doc, next) {
  doc.href = shortid(doc._id);
  next();
}
