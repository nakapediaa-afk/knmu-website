import { db } from "@/lib/firebase";

export default function TestPage() {
  console.log(db);

  return (
    <div className="p-10">
      Firebase Connected ✅
    </div>
  );
}