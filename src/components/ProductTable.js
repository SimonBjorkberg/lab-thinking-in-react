const ProductTable = (props) => {
  const { data } = props;

  return (
    <div className="product-table mt-5">
      <table className="mx-auto w-1/2">
        <thead className="font-bold text-xl">
          <tr>
            <th className="w-1/2">Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                {item.inStock ? (
                  <td>{item.name}</td>
                ) : (
                  <td className="text-red-500">{item.name}</td>
                )}
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
