import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useState } from "react";
import { Data } from "../../components/data/data";
import Slider from "../../components/ShopSlider/Slider";
import Footer from "../../components/Footer/Footer";
import { CiHeart } from "react-icons/ci";
import { decrement, increment, setCarts } from "../../reducer/AddTo";

const Shop = () => {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const [activeTab, setActiveTab] = useState("0");
  const [selectedSize, setSelectedSize] = useState(null);

  const handleGoToShop = () => {
    navigate("/");
  };

  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);

  const { slug } = useParams();
  const product = Data.find((item) => item.slug === slug);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleCartClick = (e, product) => {
    e.stopPropagation();
    dispatch(setCarts(product));
  };

  return (
    <div className="max-w-custom mx-auto px-4 mt-[43px]">
      {product ? (
        <>
          <div className="grid grid-cols-2 gap-20 justify-between">
            <div className="flex gap-2">
              <div className="flex flex-col gap-4">
                {[...Array(4)].map((_, index) => (
                  <img
                    key={index}
                    src={product.image_url}
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                ))}
              </div>
              <img
                src={product.image_url}
                alt=""
                className="w-[444px] h-[448px]"
              />
            </div>
            <div>
              <h1 className="text-[#3D3D3D] text-[28px] font-bold mb-5">
                {product.common_name}
              </h1>
              <div className="flex justify-between mb-3">
                <p className="text-[#46A358] text-[22px] font-bold">
                  ${product.price}
                </p>
                <p className="text-[#3D3D3D] text-[15px]">
                  19 Customer Reviews
                </p>
              </div>
              <div>
                <p className="mt-4 mb-3 text-[#3D3D3D] text-[15px] font-medium">
                  Short Description:
                </p>
                <p className="text-[#727272] text-[14px] leading-[24px]">
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground.
                </p>
              </div>
              <p className="text-[#3D3D3D] text-[15px] font-medium mb-3">
                Size:
              </p>
              <div className="flex gap-2 mb-6">
                {["S", "M", "L", "XL"].map((size) => (
                  <p
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`border rounded-full px-4 py-2 cursor-pointer ${
                      selectedSize === size ? "bg-[#46A358] text-white" : ""
                    }`}
                  >
                    {size}
                  </p>
                ))}
              </div>

              <div className="flex items-center gap-7 mb-6">
                <span className="flex gap-[14px] items-center">
                  <span
                    onClick={() => dispatch(decrement(product.id))}
                    className="text-white cursor-pointer bg-[#46A358] px-[15px] text-[18px] py-[6px] rounded-full font-bold hover:opacity-70"
                  >
                    -
                  </span>
                  <span className="text-[20px]">1</span>
                  <span
                    onClick={() => dispatch(increment(product.id))}
                    className="text-white cursor-pointer bg-[#46A358] px-[13px] text-[18px] py-[6px] rounded-full font-bold hover:opacity-70"
                  >
                    +
                  </span>
                </span>
                <div className="flex gap-2">
                  <button className="px-8 py-3 bg-[#46A358] text-white rounded-lg text-[14px] font-bold">
                    BUY NOW
                  </button>
                  <button
                    onClick={(e) => handleCartClick(e, product)}
                    className="px-8 py-3 text-[#46A358] bg-white border border-[#46A358] rounded-lg text-[14px] font-bold"
                  >
                    ADD TO CART
                  </button>
                  <button>
                    <CiHeart
                      className="border rounded-lg border-[#46A358] p-1 text-[#46A358]"
                      style={{ width: "45px", height: "45px" }}
                    />
                  </button>
                </div>
              </div>

              <p className="text-[#ACACAC] text-[15px] mb-3">
                SKU: <span className="text-[#727272]">{product.id}</span>
              </p>
              <p className="text-[#ACACAC] text-[15px] mb-3">
                Categories:{" "}
                <span className="text-[#727272]">{product.family}</span>
              </p>
              <p className="text-[#ACACAC] text-[15px] mb-3">
                Tags:{" "}
                <span className="text-[#727272]">
                  {product.scientific_name}
                </span>
              </p>
              <div className="flex items-center gap-3">
                <p className="text-[#3D3D3D] text-[15px] font-medium">
                  Share this product:
                </p>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <TfiEmail />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex gap-4 border-b">
              <p
                className={`cursor-pointer ${
                  activeTab === "0" ? "border-b-2 border-[#46A358]" : ""
                }`}
                onClick={() => setActiveTab("0")}
              >
                Product Description
              </p>
              <p
                className={`cursor-pointer ${
                  activeTab === "1" ? "border-b-2 border-[#46A358]" : ""
                }`}
                onClick={() => setActiveTab("1")}
              >
                Reviews (19)
              </p>
            </div>

            {activeTab === "0" ? (
              <div>
                <div className="flex flex-col gap-y-4 mt-5">
                  <p className="text-[#727272] text-[14px] leading-[24px]">
                    The ceramic cylinder planters come with a wooden stand to
                    help elevate your plants off the ground. The ceramic
                    cylinder planters come with a wooden stand to help elevate
                    your plants off the ground. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nam fringilla augue nec est
                    tristique auctor. Donec non est at libero vulputate rutrum.
                    Morbi ornare lectus quis justo gravida semper. Nulla tellus
                    mi, vulputate adipiscing cursus eu, suscipit id nulla.
                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                    feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                    tempus ante. Fusce ultricies massa massa. Fusce aliquam,
                    purus eget sagittis vulputate, sapien libero hendrerit est,
                    sed commodo augue nisi non neque. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed tempor, lorem et
                    placerat vestibulum, metus nisi posuere nisl, in accumsan
                    elit odio quis mi. Cras neque metus, consequat et blandit
                    et, luctus a nunc. Etiam gravida vehicula tellus, in
                    imperdiet ligula euismod eget. The ceramic cylinder planters
                    come with a wooden stand to help elevate your plants off the
                    ground.
                  </p>
                  <div>
                    <p className="text-[#3D3D3D] text-[14px] font-bold leading-[24px]">
                      Living Room:
                    </p>
                    <p className="text-[#727272] text-[14px] font-normal leading-[24px]">
                      The ceramic cylinder planters come with a wooden stand to
                      help elevate your plants off the ground. The ceramic
                      cylinder planters come with a wooden stand to help elevate
                      your plants off the ground. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="text-[#3D3D3D] text-[14px] font-bold leading-[24px]">
                      Dining Room:
                    </p>
                    <p className="text-[#727272] text-[14px] font-normal leading-[24px]">
                      The benefits of houseplants are endless. In addition to
                      cleaning the air of harmful toxins, they can help to
                      improve your mood, reduce stress and provide you with
                      better sleep. Fill every room of your home with
                      houseplants and their restorative qualities will improve
                      your life.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#3D3D3D] text-[14px] font-bold leading-[24px]">
                      Office:
                    </p>
                    <p className="text-[#727272] text-[14px] font-normal leading-[24px]">
                      The ceramic cylinder planters come with a wooden stand to
                      help elevate your plants off the ground. The ceramic
                      cylinder planters come with a wooden stand to help elevate
                      your plants off the ground. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <p className="text-[#46A358] text-[17px] font-bold leading-[16px] mb-3 mt-[130px]">
                  Related Products
                </p>
                <Slider />
                <div className="mt-[130px]">
                  <Footer />
                </div>
              </div>
            ) : (
              <div>
                <div className="mt-5 flex flex-col gap-y-4">
                  <div>
                    <p className="text-[#3D3D3D] text-[14px] font-bold leading-[24px] ">
                      Customer Reviews:
                    </p>
                    <p className="text-[#727272] text-[14px] font-normal leading-[24px]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ut dolor, asperiores minus ducimus molestias sapiente
                      repellendus tenetur eius. Repudiandae saepe quae placeat
                      omnis delectus consequatur repellendus excepturi tempora
                      assumenda inventore, unde quasi officia? Inventore
                      accusantium in harum impedit sed, earum vero et
                      cupiditate. Earum, nihil!
                    </p>
                  </div>
                  <div>
                    <p className="text-[#3D3D3D] text-[14px] font-bold leading-[24px] ">
                      Customer Reviews:
                    </p>
                    <p className="text-[#727272] text-[14px] font-normal leading-[24px] ">
                      The ceramic cylinder planters come with a wooden stand to
                      help elevate your plants off the ground. The ceramic
                      cylinder planters come with a wooden stand to help elevate
                      your plants off the ground. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#3D3D3D] text-[14px] font-bold leading-[24px] ">
                      Customer Reviews:
                    </p>
                    <p className="text-[#727272] text-[14px] font-normal leading-[24px] ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, tenetur veritatis. Pariatur minima deleniti maxime
                      sed. Explicabo, tempore! Dolorum exercitationem alias
                      voluptates, laboriosam molestias esse.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Shop;
