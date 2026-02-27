import { SITE_DESCRIPTION, TEMPLATE_NAMES } from "@/app/metadata";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata = {
  title: TEMPLATE_NAMES.cart,
  description: [`View your shopping cart items and proceed to checkout. ${SITE_DESCRIPTION}`],
};

const CartPage = () => {
  return (
    <div className="quickbd-container">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shopping Cart" }
        ]}
      />
    </div>
  );
};

export default CartPage;