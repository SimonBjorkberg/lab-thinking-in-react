const ProductTable = (props) => {
  const { data } = props;

  return (
    <div class="product-table mt-5">
      <table class="mx-auto w-1/2 border border-gray-300 shadow-md">
        <thead class="bg-gray-200">
          <tr>
            <th class="w-1/2 py-2 px-4 font-semibold">Name</th>
            <th class="py-2 px-4 font-semibold">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr
                key={item.id}
                class="{{ item.inStock ? 'bg-white' : 'bg-red-100' }}"
              >
                <td class="py-2 px-4">
                  {item.inStock ? (
                    <span class="text-green-600 font-semibold">
                      {item.name}
                    </span>
                  ) : (
                    <span class="text-red-600 font-semibold">
                      {item.name} (Out of Stock)
                    </span>
                  )}
                </td>
                <td class="py-2 px-4">{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
