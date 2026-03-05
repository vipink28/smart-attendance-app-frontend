import { Asterisk, CheckCircle, XCircle } from "lucide-react"
import React from "react"
import toast from "react-hot-toast"

export const showToast = (
    type,
    message,
) => {
    toast.custom(
        t =>
            React.createElement(
                "div",
                {
                    className: `flex items-center gap-2 p-3 rounded-lg shadow-md ${type === "success"
                        ? "bg-green-100 text-green-700"
                        : type === "info"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-red-100 text-red-700"
                        } ${t.visible ? "animate-enter" : "animate-leave"}`,
                },
                type === "success"
                    ? React.createElement(CheckCircle, {
                        className: "text-green-500",
                        size: 20,
                    })
                    : type === "info"
                        ? React.createElement(Asterisk, {
                            className: "text-blue-500",
                            size: 20,
                        })
                        : React.createElement(XCircle, {
                            className: "text-red-500",
                            size: 20,
                        }),
                React.createElement("span", null, message),
            ),
        { duration: 4000 },
    )
}
