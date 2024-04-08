import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";

const CartItem = ({ item }) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
      <div className="w-[100px] h-[100px] relative">
        <Image
          src={urlFor(item.images[0]).url()}
          alt={item.name}
          fill
          priority
          sizes="(max-width: 110px) 110px ,110px"
          className="object-contain"
        />
      </div>
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex justify-between items-center">
          <h5>{item.name}</h5>
          <button onClick={() => removeItem(item.id)}>
            <FaX className="text-sm" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button onClick={() => decrementItem(item.id)}>
              <FaMinus className="text-[10px]" />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button onClick={() => incrementItem(item.id)}>
              <FaPlus className="text-[10px]" />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">
            {item.price * item.quantity} $
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
