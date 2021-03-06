import Article from '../../models/article';

export default (req, res, next) => {

  var article = new Article(req.body);

  article.save((error, article) => {
    if (error) return next(error);
    req.article = article;
    next();
  });

};
