import type { User } from "../api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDaysIcon as CalendarIcon,
  UserIcon,
  CreditCardIcon as IdCardIcon,
} from "lucide-react";

interface UserDetailsProps {
  user: User;
}

export function UserDetails({ user }: UserDetailsProps) {
  return (
    <Card className="shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <CardHeader className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          User Details
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <dl className="space-y-6">
          <div className="flex items-center">
            <dt className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 w-1/3">
              <UserIcon className="mr-2 h-5 w-5" />
              Username
            </dt>
            <dd className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {user.username}
            </dd>
          </div>
          <div className="flex items-center">
            <dt className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 w-1/3">
              <IdCardIcon className="mr-2 h-5 w-5" />
              Full Name
            </dt>
            <dd className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {`${user.firstName} ${user.lastName}`}
            </dd>
          </div>
          <div className="flex items-center">
            <dt className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 w-1/3">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Date of Birth
            </dt>
            <dd className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {new Date(user.dob).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
