
// constuctor function
function APIfeatures(query,queryString){
    this.query = query; // product.find()
    this.queryString = queryString; // req.query

    // pagination
    this.pagination = (resultPerPage) => {
      const currentPage = Number(this.queryString.page) || 1;
      const skip = resultPerPage * (currentPage - 1);
      this.query = this.query.limit(resultPerPage).skip(skip);
      return this;
    };

    //searching
    this.serarch = () => {
      const keyword = this.queryString.keyword
        ? {
            name: {
              $regex: this.queryString.keyword,
              $options: "i", // case insensitive
            },
          }
        : {};

       

      this.query = this.query.find({ ...keyword });
      return this;
    };

// filtering
 this.filter = () => {
   let queryObj = { ...this.queryString };

   // reomve some fieled for catogery
   const reomveField = ["keyword", "page", "limit"];
   reomveField.forEach((el) => delete queryObj[el]);

   // filter for price and rating
   let queryStr = JSON.stringify(queryObj); // covert to string
   queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`); // put in inside $ symobol o/p {"price":{"$gt":"2000","$lt":"25000"}}

   this.query = this.query.find(JSON.parse(queryStr)); // convert to obj
//    console.log(queryStr);

   return this;

 }

}


module.exports = APIfeatures