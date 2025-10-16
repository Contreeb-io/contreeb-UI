import googleIcon from "../../../public/google.png";

export default function Oauth() {
  return (
    <div className="flex w-full flex-col gap-4 text-sm font-medium text-[#101928]">
      <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#F0F2F5] bg-transparent p-3">
        <img src={googleIcon} alt="google image" />
        Continue with Google
      </button>
      <button className="flex cursor-pointer justify-center rounded-full border border-[#F0F2F5] bg-transparent p-3">
        Continue with magic link
      </button>
    </div>
  );
}
