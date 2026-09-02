"use client";

import { useForm } from "@/hooks/useForm";
import {
    MouseEvent,
    useState,
    FormEvent
} from "react";
import { createPortal } from "react-dom";
type BlogContentWithQ4ModalProps = {
    contentData: string;
};

export default function BlogContent({
    contentData,
}: BlogContentWithQ4ModalProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");

    const { submitcontact } = useForm();

    const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
        const clickedElement = event.target as HTMLElement;
        const grabFormLink = clickedElement.closest("a.grabform");

        if (!grabFormLink) return;

        event.preventDefault();
        setFormError("");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        if (!isSubmitting) {
            setIsModalOpen(false);
            setFormError("");
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

            {isModalOpen &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[2147483647] grid h-[100dvh] place-items-center overflow-y-auto bg-[#071426]/70 p-3 sm:p-6"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="q4-modal-title"
                        onClick={closeModal}
                    >
                        <div
                            className="relative w-full max-w-lg max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:max-h-[calc(100dvh-3rem)] sm:p-7"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                aria-label="Close form"
                                onClick={closeModal}
                                disabled={isSubmitting}
                                className="absolute right-4 top-3 text-3xl leading-none text-slate-400 transition hover:text-black disabled:cursor-not-allowed"
                            >
                                ×
                            </button>

                            <div
                                id="q4-modal-title"
                                className="pr-8 text-xl font-bold leading-snug text-[#0B1F3A] sm:text-2xl"
                            >
                                Get the Free Q4 Marketing Timeline Checklist
                            </div>

                            <div className="mt-2 text-sm leading-6 text-slate-600">
                                Tell us where to send it and it&apos;ll land in your inbox
                                right away.
                            </div>

                            <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
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
                                        disabled={isSubmitting}
                                        placeholder="Enter your full name"
                                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-[#1264E4] focus:ring-4 focus:ring-[#1264E4]/10 disabled:bg-slate-100"
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
                                        disabled={isSubmitting}
                                        placeholder="you@company.com"
                                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-[#1264E4] focus:ring-4 focus:ring-[#1264E4]/10 disabled:bg-slate-100"
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
                                        disabled={isSubmitting}
                                        placeholder="Enter your company name"
                                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-[#1264E4] focus:ring-4 focus:ring-[#1264E4]/10 disabled:bg-slate-100"
                                    />
                                </div>

                                {formError && (
                                    <p className="text-sm font-medium text-red-600">
                                        {formError}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-1 flex w-full items-center justify-center !rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#161617] focus:outline-none focus:ring-4 focus:ring-black/20 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isSubmitting ? "Sending..." : "Get the Checklist"}
                                </button>

                                <p className="pt-1 text-center text-xs leading-5 text-slate-500">
                                    We respect your privacy and will only use your details to
                                    send this checklist and relevant B3NET updates.
                                </p>
                            </form>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}