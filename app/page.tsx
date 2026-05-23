import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">CeFi.vn</h1>
          <p>Minh bạch hoá dữ liệu của tài chính tập trung.</p>
          <Button className="mt-2">Sắp ra mắt!</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Nhấn <kbd>d</kbd> để chuyển sang chế độ tối)
        </div>
      </div>
    </div>
  )
}
