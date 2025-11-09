export default function StatCard({
  bgColor = "#FBF9F1",
  textColor = "#282310",
  label = "",
  value = "",
  showCurrency = false,
  currency = "GHS",
}) {
  return (
    <div
      className="min-w-[290px] flex-1 space-y-4 rounded-2xl px-4 py-4 md:flex-0 md:py-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <p className="text-sm font-medium">{label}</p>
      <h5 className="text-2xl font-bold">
        {showCurrency && <>{currency} </>}
        <span>{value}</span>
      </h5>
    </div>
  );
}
