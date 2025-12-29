// import { Controller } from "react-hook-form";
// import { useMultiStepForm } from "../../context/multi-step-context";
// import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
// import FileUpload from "../ui/file-upload";
// import { Input } from "../ui/input";
// import Back from "./back";
// import Header from "./header";

// export default function PublicCampaignFiles() {
//   const { nextStep, form } = useMultiStepForm();

//   return (
//     <section className="mx-auto max-w-[902px] space-y-6">
//       <Header
//         header="Upload verification documents"
//         desc="Upload  documents supporting your claim on behalf of the person you are raising money for."
//       />{" "}
//       <section className="space-y-6">
//         <FieldGroup className="space-y-6 rounded-2xl bg-white/50 p-6">
//           <Controller
//             name="id_card"
//             control={form.control}
//             render={({ field, fieldState }) => (
//               <Field data-invalid={fieldState.invalid} className="gap-1">
//                 <FieldLabel
//                   htmlFor="id-card"
//                   className="flex flex-wrap text-sm text-[#150524]"
//                 >
//                   Identification card
//                   <br className="sm:hidden" />
//                   <span className="text-[#150524B2]">
//                     (Ghana card or any national issued ID)
//                   </span>
//                 </FieldLabel>
//                 <Input
//                   id="id-card"
//                   aria-invalid={fieldState.invalid}
//                   autoComplete="off"
//                   className="hidden shadow-none"
//                   type="file"
//                   onChange={(e) => field.onChange(e.target.files?.[0])}
//                   ref={field.ref}
//                 />
//                 <FileUpload value={field.value} onChange={field.onChange} />
//                 {fieldState.invalid && (
//                   <FieldError errors={[fieldState.error]} />
//                 )}
//               </Field>
//             )}
//           />

//           <Controller
//             name="proof_of_need"
//             control={form.control}
//             render={({ field, fieldState }) => (
//               <Field data-invalid={fieldState.invalid} className="gap-1">
//                 <FieldLabel
//                   htmlFor="proof-of-need"
//                   className="flex flex-wrap text-sm text-[#150524]"
//                 >
//                   Proof of need
//                   <br className="sm:hidden" />
//                   <span className="text-[#150524B2]">
//                     (eg. Hospital bill, school bill, invoice etc)
//                   </span>
//                 </FieldLabel>
//                 <Input
//                   id="proof-of-need"
//                   aria-invalid={fieldState.invalid}
//                   autoComplete="off"
//                   className="hidden shadow-none"
//                   type="file"
//                   onChange={(e) => field.onChange(e.target.files?.[0])}
//                   ref={field.ref}
//                 />
//                 <FileUpload value={field.value} onChange={field.onChange} />
//                 {fieldState.invalid && (
//                   <FieldError errors={[fieldState.error]} />
//                 )}
//               </Field>
//             )}
//           />
//         </FieldGroup>
//         <article className="font-inter flex items-center justify-between">
//           <Back />

//           <div className="md:max-w-[443px] md:flex-1">
//             {" "}
//             <button
//               type="button"
//               onClick={nextStep}
//               className="relative z-10 cursor-pointer rounded-full bg-[#6360F0] px-4 py-3 text-white disabled:bg-[#D7D0DD] disabled:text-white md:w-full"
//             >
//               Create campaign
//             </button>
//           </div>
//         </article>
//       </section>
//     </section>
//   );
// }
