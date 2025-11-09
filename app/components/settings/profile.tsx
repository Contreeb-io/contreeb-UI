import { Separator } from "../ui/separator";
import Email from "./email";
import Name from "./name";
import Password from "./password";

export default function Profile() {
  return (
    <section className="space-y-8">
      <article className="space-y-5">
        <h5 className="font-mackinac font-bold text-[#0E021A] md:text-[22px]">
          Profile
        </h5>

        <Name />

        <Separator className="bg-[#D0D5DD]" />

        <Email />

        <Separator className="bg-[#D0D5DD]" />

        <Password />
      </article>
    </section>
  );
}
