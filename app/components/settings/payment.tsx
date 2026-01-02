import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader2, PenLine, Trash2 } from "lucide-react";
import React, { useState, type SetStateAction } from "react";
import { queryClient } from "../../app";
import { queryKeys } from "../../constant";
import { deleteWallet, getAllWallets } from "../../lib/payment-wallet";
import type { Wallet } from "../../types";
import PaymentModal from "../dashboard/payment-modal";
import PaymentWalletSkeleton from "../skeletons/payment-wallet";
import { Button } from "../ui/button";

export default function Payment() {
  const [walletToEdit, setWalletToEdit] = useState<null | Wallet>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const { data, isPending } = useQuery({
    queryKey: queryKeys.wallets,
    queryFn: getAllWallets,
  });

  const { mutate: deleteItem } = useMutation({
    mutationFn: deleteWallet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.wallets });
      setDeletingId(null);
    },
  });

  const handleDelete = (id: number) => {
    setDeletingId(id);
    deleteItem(id);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h5 className="font-mackinac text-[22px] font-bold text-[#0E021A]">
          Payment methods
        </h5>

        {!isPending && data?.length !== 0 && (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-1 rounded-full bg-[#F7F7F7] px-3 py-2.5 text-sm font-medium"
          >
            <PenLine size={16} color="#737373" />
            Add
          </button>
        )}
        <PaymentModal
          walletToEdit={walletToEdit}
          showModal={showModal}
          setShowModal={setShowModal}
          setWalletToEdit={setWalletToEdit}
        />
      </div>

      {isPending && <PaymentWalletSkeleton />}
      {!isPending && data?.length === 0 ? (
        <EmptyState setShowModal={setShowModal} />
      ) : (
        data?.map((wallet: Wallet) => (
          <div key={wallet.id} className="rounded-2xl bg-[#F5F5F5]/60 p-4">
            <div className="flex w-full items-start justify-between font-sans">
              <div className="space-y-2">
                <div>
                  <h5 className="text-sm text-[#737373]">Network provider</h5>
                  <p className="font-medium text-[#404040]">{wallet.network}</p>
                </div>
                <div>
                  <h5 className="text-sm text-[#737373]">Account name</h5>
                  <p className="font-medium text-[#404040]">
                    {wallet.account_name}
                  </p>
                </div>
                <div>
                  <h5 className="text-sm text-[#737373]">Account number</h5>
                  <p className="font-medium text-[#404040]">
                    {wallet.momo_number}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setWalletToEdit(wallet);
                    setShowModal(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#F0F2F5] px-3 py-2 text-sm"
                >
                  <PenLine size={14} />
                  Edit
                </button>
                <button
                  disabled={deletingId === wallet.id}
                  onClick={() => handleDelete(wallet.id)}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#FEE2E2] px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {deletingId === wallet.id ? (
                    <Loader2
                      className="animate-spin"
                      size={20}
                      color="#DC2626"
                    />
                  ) : (
                    <Trash2 size={20} color="#DC2626" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

function EmptyState({
  setShowModal,
}: {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <article className="flex flex-col items-center justify-between rounded-2xl bg-[#F5F5F5] px-10 py-10 md:px-36">
      <div>
        <img src="/empty-payment.png" alt="payment empty state" />
        <p className="-mt-6 text-center text-sm font-medium text-[#525252]">
          You have no payment method added
        </p>
      </div>

      <Button variant="custom" onClick={() => setShowModal(true)}>
        Add payment method
      </Button>
    </article>
  );
}
