export default function Password() {
  return (
    <section className="space-y-6">
      {" "}
      <h5 className="font-mackinac font-bold text-[#0E021A] md:text-[22px]">
        Password
      </h5>
      <article className="flex flex-col items-start justify-between gap-x-6 gap-y-4 font-sans md:flex-row md:items-center">
        <div className="space-y-2">
          <h6 className="font-medium text-[#150524]">Account password</h6>
          <p className="text-sm font-medium text-[#667185]">
            Password keeps your account secure
          </p>
        </div>
        <button className="rounded-full bg-[#F0F2F5] px-4 py-2 font-medium text-[#0E021A]">
          Change password
        </button>
      </article>
    </section>
  );
}
