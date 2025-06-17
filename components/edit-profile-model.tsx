"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useRef, useState } from "react";
import { Pencil, UploadIcon } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";

export function EditProfileModal({
  currentName,
  currentBio,
  currentAvatar,
}: {
  currentName: string;
  currentBio: string;
  currentAvatar: string;
}) {
  const [name, setName] = useState(currentName);
  const [bio, setBio] = useState(currentBio);
  const [avatarUrl, setAvatarUrl] = useState(currentAvatar);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Pencil />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="max-w-md"
      >
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
          <DialogDescription>
            Customize your avatar, name & bio.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-2 mt-4">
          <div
            className="relative group cursor-pointer"
            onClick={() => fileRef.current?.click()}
          >
            <Avatar className="w-24 h-24">
              <AvatarImage src={avatarUrl} alt="avatar" />
            </Avatar>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-full">
              <UploadIcon className="text-white w-6 h-6" />
            </div>
          </div>
          <Input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileRef}
            onChange={handleImageChange}
          />
          <p className="text-sm text-muted-foreground">
            Click avatar to change
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-1">
          <div className="flex flex-col gap-3">
            <Label>Name</Label>
            <Input value={name} />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Bio</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write something cool here..."
              className="resize-none"
            />
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-end mt-6">
          <Button>Save Changes</Button>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
