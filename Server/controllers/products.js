import Product from "../Models/product.js";

const getAllProducts = async (req, res) => {
  try {
    const result = await Product.find({});
    const totalPage = result.length;
    const products = result.slice(0, 5);
    res.status(202).json({ products, totalPage });
  } catch (error) {
    res.status(500).json({ Message: "Internal Server Error" });
    console.log(error.message);
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Product.findById(id);
    res.status(202).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getPostsByFilter = async (req, res) => {
  const { category, company, name, subCategory, numericFilters, sort } =
    req.query;

  // console.log(req.query);

  const queryObj = {};
  try {
    if (category && category !== "All Products") {
      if (category === "men" || category === "man" || category === "Men") {
        queryObj.category = "men";
      } else queryObj.category = { $regex: category, $options: "i" };
    }
    if (subCategory) {
      queryObj.subCategory = { $regex: subCategory, $options: "i" };
    }
    if (company) {
      queryObj.company = company;
    }
    if (numericFilters) {
      const map = {
        ">": "$gt",
        "<": "$lt",
        ">=": "$gte",
        "<=": "$lte",
        "=": "$eq",
      };
      const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    
      let filters = numericFilters.replace(regEx, (match) => `-${map[match]}-`);

      filters.split(",").forEach((item) => {
        const [field, operator, value] = item.split("-");
        if (!queryObj[field]) {
          queryObj[field] = {};
        }
        queryObj[field][operator] = Number(value);
      });
    }

    if (name) {
      queryObj.name = { $regex: name, $options: "i" };
    }

    // console.log(queryObj);
    let result = Product.find(queryObj);
    const ans = await Product.find(queryObj);
    const totalPage = Math.ceil(ans.length / 5);

    if (sort) {
      const sortList = sort.split(",").join(" ");
      result = result.sort(sortList);
    }

    let limit = 5;
    const pageNumber = req.query.pageNumber || 1;
    // const skip = (pageNumber - 1) * limit;
    result = result.limit(limit * pageNumber);

    const products = await result;
    res.status(202).json({ products, totalPage });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { getAllProducts, getPostsByFilter, getProduct };
