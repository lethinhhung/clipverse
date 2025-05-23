import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AuthenticationDialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return (
    <Dialog>
      <DialogTrigger {...props}></DialogTrigger>
      <DialogContent>
        <Tabs defaultValue="login">
          <DialogHeader>
            <DialogTitle>
              <TabsList className="p-0">
                <TabsTrigger className="p-4" value="login">
                  Login
                </TabsTrigger>
                <TabsTrigger className="p-4" value="register">
                  Register
                </TabsTrigger>
              </TabsList>
            </DialogTitle>
          </DialogHeader>

          <TabsContent value="login" className="space-y-4 p-4 pt-0">
            <div className={"flex flex-col gap-4"}>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login to your account
              </p>
              <form>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </div>
              </form>
            </div>
            <DialogFooter className="flex w-full !justify-between">
              <Button variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
              <div className="flex gap-2">
                <DialogClose asChild>
                  <Button variant={"outline"}>Cancel</Button>
                </DialogClose>
                <Button>Login</Button>
              </div>
            </DialogFooter>
          </TabsContent>
          <TabsContent value="register" className="space-y-4 p-4 pt-0">
            <div className={"flex flex-col gap-4"}>
              <p className="text-sm text-muted-foreground">
                Enter your username, email and passwords below to create a new
                account
              </p>
              <form>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Username</Label>
                    </div>
                    <Input
                      placeholder="username"
                      id="username"
                      type={"text"}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="re-password">Re-type password</Label>
                    </div>
                    <Input id="re-password" type="password" required />
                  </div>
                </div>
              </form>
            </div>
            <DialogFooter className="flex w-full">
              <DialogClose asChild>
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>
              <Button>Submit</Button>
            </DialogFooter>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
