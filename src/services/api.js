// const BASE_URL = "https://fakestoreapi.com";

// export async function getProducts() {
//   const response = await fetch(`${BASE_URL}/products?limit=5`, {
//     cache: "no-store",
//   });

//   if (!response.ok) {
//     console.error("STATUS:", response.status);
//     console.error(await response.text());

//     throw new Error("Failed to fetch products");
//   }

//   return response.json();
// }

// export async function getProductById(id) {
//   const response = await fetch(`${BASE_URL}/products/${id}`, {
//     cache: "no-store",
//   });

//   if (response.status === 404) {
//     return null;
//   }

//   if (!response.ok) {
//     console.error("STATUS:", response.status);
//     console.error(await response.text());

//     throw new Error("Failed to fetch product");
//   }

//   return response.json();
// }

const BASE_URL = "https://fakestoreapi.com";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products?limit=5`, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
