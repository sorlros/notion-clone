"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { PopoverTrigger, Popover, PopoverContent} from "@/components/ui/popover"
import { useOrigin } from "@/hooks/use-origin";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

interface PublishProps {
  initialData: Doc<"documents">;
}

export const Publish = ({initialData}: PublishProps) => {
  const origin = useOrigin()
  const update = useMutation(api.documents.update)

  return (
    <div></div>
  )
}