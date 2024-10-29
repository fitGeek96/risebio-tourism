export async function validateVIP(req) {
  const voucherCode = req.headers["x-voucher-code"];
  if (!voucherCode) {
    return false;
  }

  // Call to WordPress API for validation
  const response = await fetch(
    `${process.env.WORDPRESS_API_URL}/validate-voucher`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ voucherCode }),
    },
  );

  const data = await response.json();
  return data.isVIP;
}
