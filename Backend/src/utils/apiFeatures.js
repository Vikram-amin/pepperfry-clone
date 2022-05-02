
// constuctor function
function APIfeatures(query,queryString){
    this.query = query; // product.find()
    this.queryString = queryString; // req.query

    this.pagination = () => {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 2;
        const skip = limit * (page - 1)
        this.query = this.query.limit(limit).skip(skip);
        return this;
    }

    this.serarch = () => {
      const keyword = this.queryString.keyword
        ? {
            name: {
              $regex: this.queryString.keyword,
              $options: "i", // case insensitive
            },
          }
        : {};

        console.log(keyword)

      this.query = this.query.find({ ...keyword });
      return this;
    };
}


module.exports = APIfeatures