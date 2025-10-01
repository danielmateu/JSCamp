// import { Button } from "@/components/ui/Button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">DevJobs</h1>
        <Button
          variant={"ghost"}
        >
          <span className="material-symbols-outlined"> help </span>
        </Button>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to continue to your account.</p>
          </div>
          <form className="space-y-6">
            <div>
              <Label className="sr-only" >Email or username</Label>
              <Input id="email" name="email" placeholder="Email or username" type="text" />
            </div>
            <div>
              <Label className="sr-only" >Password</Label>
              <Input id="password" name="password" placeholder="Password" type="password" />
            </div>
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a className="font-medium text-primary hover:underline" href="#">Forgot password?</a>
              </div>
            </div>
            <div>
              <Button
                variant={"default"}

                size={"login"}
                type="submit">
                Log in
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className="bg-gray-100 px-2 text-gray-500 dark:bg-background-dark dark:text-gray-400">Or
                continue with</span>
            </div>
          </div>
          <div className="space-y-4">
            <Button
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white/50 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-black/20 dark:text-gray-300 dark:hover:bg-primary/10">
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z"
                  fillRule="evenodd"></path>
              </svg>
              Continue with Github
            </Button>
            <Button
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white/50 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-black/20 dark:text-gray-300 dark:hover:bg-primary/10">
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"></path>
                <path d="M1 1h22v22H1z" fill="none"></path>
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
      </main>
      <footer className="p-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?
          <a className="font-medium text-primary hover:underline" href="#">Sign up</a>
        </p>
      </footer>
    </div>
  );
}
