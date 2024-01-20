"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useStoreModal } from "@/hooks/useStoreModal";

import Modal from "@/components//ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Icons } from "@/components/ui/icons";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useCreateStore } from "@/hooks/useStore";

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { mutate: addStore } = useCreateStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //*STORE_MODAL
    try {
      setLoading(true);
      const response = await axios.post("/api/admin/store", values);

      // if (response.status === 200) {
      //   toast.success("Success Creating Store!");
      //   router.refresh();
      //   storeModal.onClose();
      // }
      addStore(response.data, {
        onSuccess: () => {
          toast.success("Success Creating Store!");
          router.refresh();
          storeModal.onClose();
        },
        // onError: () => {
        //   toast.error("Something went wrong :(, please try again");
        // },
      });
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong :(, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create your store"
      description="Add a new store to manage products and catagories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        disabled={loading}
                        placeholder="Cookit-Store"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant={"outline"}
                  onClick={storeModal.onClose}
                >
                  {loading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  {loading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
