"use client";

import { useForm } from "@/hooks/useForm";
import { FormEvent, useState } from "react";

type BlogContentWithQ4ModalProps = {
    contentData: string;
};

export default function BlogContent({
    contentData,
}: BlogContentWithQ4ModalProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { submitcontact, loading } = useForm();

    const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const clickedElement = event.target as HTMLElement;
        const grabFormLink = clickedElement.closest("a.grabform");

        if (!grabFormLink) return;

        event.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        if (!isSubmitting) {
            setIsModalOpen(false);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        setIsSubmitting(true);

        const payload = {
            your_name: formData.get("your_name"),
            your_email: formData.get("your_email"),
            your_company: formData.get("your_company"),
        };
        try {
            const data = await submitcontact(
                {
                    ...payload,
                },
                14379
            );
            if (data?.status === "mail_sent") {
                setIsModalOpen(false)
            } else {

            }
        }
        catch (error) {
            console.error("Contact form submit error:", error);
        }
        finally {

            setIsSubmitting(false);
        }
    };

    return (
        <>

            <div
                className="blog-container primary-bodyText blog-detailpage-content"
                onClick={handleContentClick}
                dangerouslySetInnerHTML={{ __html: contentData }}
            />


            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[9999] grid min-h-dvh place-items-center overflow-y-auto bg-[#071426]/70 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="q4-modal-title"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Close form"
                            onClick={closeModal}
                            disabled={isSubmitting}
                            className="absolute right-5 top-4 text-3xl leading-none text-slate-400 transition hover:text-[#1264E4] disabled:cursor-not-allowed"
                        >
                            ×
                        </button>
                        <div
                            id="q4-modal-title"
                            className="pr-8 font-bold leading-tight text-[#0B1F3A] "
                        >
                            Get the Free Q4 Marketing Timeline Checklist
                        </div>
                        <div className="mt-3 text-base  text-slate-600 text-xs">
                            Tell us where to send it and it&apos;ll land in your inbox right
                            away.
                        </div>

                        <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="your_name"
                                    className="mb-1.5 block text-sm font-semibold text-[#0B1F3A]"
                                >
                                    Full Name <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id="your_name"
                                    name="your_name"
                                    type="text"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-[#1264E4] focus:ring-4 focus:ring-[#1264E4]/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="your_email"
                                    className="mb-1.5 block text-sm font-semibold text-[#0B1F3A]"
                                >
                                    Work Email <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id="your_email"
                                    name="your_email"
                                    type="email"
                                    required
                                    placeholder="you@company.com"
                                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-[#1264E4] focus:ring-4 focus:ring-[#1264E4]/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="your_company"
                                    className="mb-1.5 block text-sm font-semibold text-[#0B1F3A]"
                                >
                                    Company Name
                                </label>

                                <input
                                    id="your_company"
                                    name="your_company"
                                    type="text"
                                    placeholder="Enter your company name"
                                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-[#1264E4] focus:ring-4 focus:ring-[#1264E4]/10"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 flex w-full items-center justify-center !rounded-xl bg-black px-5 py-4 text-base font-semibold text-white transition duration-200 !hover:bg-[#161617] focus:outline-none focus:ring-4 focus:ring-black/20 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Get the Checklist"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}