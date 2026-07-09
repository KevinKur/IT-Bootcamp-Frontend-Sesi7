export async function GET() {
  const response = await fetch("https://fakestoreapi.com/products/1");

  return Response.json({
    status: response.status,
    ok: response.ok,
  });
}
