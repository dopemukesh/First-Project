import React from "react";

const UserJsonCard = ({ user, idx }) => (
  <div className="min-w-64">
    <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg text-xs overflow-x-auto">
      <span className="text-gray-400 dark:text-gray-600">{`{\n`}</span>
      <span className="text-amber-500">  "id"</span>:{" "}
      <span className="text-sky-500 dark:text-sky-400">"0{idx + 1}"</span>,{`\n`}
      <span className="text-amber-500">  "name"</span>:{" "}
      <span className="text-sky-500 dark:text-sky-400">"{user.name}"</span>,{`\n`}
      <span className="text-amber-500">  "email"</span>:{" "}
      <span className="text-sky-500 dark:text-sky-400">"{user.email}"</span>,{`\n`}
      <span className="text-amber-500">  "joined"</span>:{" "}
      <span className="text-sky-500 dark:text-sky-400">"{user.joined}"</span>,{`\n`}
      <span className="text-amber-500">  "role"</span>:{" "}
      <span className="text-sky-500 dark:text-sky-400">"{user.role}"</span>,{`\n`}
      <span className="text-amber-500">  "status"</span>:
      <span
        className={
          user.status === "Active"
            ? "text-emerald-500 dark:text-emerald-400"
            : "text-rose-500"
        }
      >
        "{user.status}"
      </span>
      <span className="text-gray-400 dark:text-gray-600">{`\n}`}</span>
    </pre>
  </div>
);

export default UserJsonCard;
