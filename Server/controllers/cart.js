import Cart from "../Models/cart.js";

const getCartDetails = async (req, res) => {
  const { userId } = req.user;
  try {
    const cart = await Cart.findOne({ userId });
    // console.log(cart);
    if(cart !== null) return res.status(202).json(cart);
    else return res.status(202).json([]);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updateCart = async (req, res) => {
  const { userId } = req.user;

  const { totalPrice, products } = req.body;
  // console.log(products);

  try {
    const cart = await Cart.findOne({ userId });
    // console.log(cart);
    if (!cart) {
      const updatedCart = await Cart.create({ ...req.body, userId });
      return res.status(202).json(updatedCart);
    }

    (cart.totalPrice = totalPrice),
    (cart.products = products);
    const updatedCart = await Cart.findOneAndUpdate({ userId }, cart, {
      new: true,
    });
    return res.status(202).json(updatedCart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getHistory = async (req, res) => {
  console.log("Fine");
};

export { updateCart, getCartDetails, getHistory };
