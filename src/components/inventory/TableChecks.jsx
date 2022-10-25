import { Check } from "./Check";

export const TableChecks = ({ checks, setChecks }) => {
  return (
    <div className="inventory-table-checks">
      <Check
        labelFor="author"
        title="author"
        checked={checks.author}
        func={() => setChecks({ ...checks, author: !checks.author })}
      />
      <Check
        labelFor="category"
        title="category"
        checked={checks.category}
        func={() => setChecks({ ...checks, category: !checks.category })}
      />
      <Check
        labelFor="provider"
        title="provider"
        checked={checks.provider}
        func={() => setChecks({ ...checks, provider: !checks.provider })}
      />
      <Check
        labelFor="base_price"
        title="base price"
        checked={checks.base_price}
        func={() => setChecks({ ...checks, base_price: !checks.base_price })}
      />
      <Check
        labelFor="public_price"
        title="public price"
        checked={checks.public_price}
        func={() =>
          setChecks({ ...checks, public_price: !checks.public_price })
        }
      />
      <Check
        labelFor="stock"
        title="stock"
        checked={checks.stock}
        func={() => setChecks({ ...checks, stock: !checks.stock })}
      />
    </div>
  );
};
