import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage, 
  FormDescription 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function InputField({
  form,
  name,
  label,
  icon,
  placeholder,
  description,
}: {
  form: any;
  name: string;
  label: string;
  icon?: React.ReactNode;
  placeholder?: string;
  description?: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1.5">
          <FormLabel className="text-xs font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
            {icon} {label}
          </FormLabel>
          <FormControl>
            <div className="relative group">
               <Input 
                {...field} 
                placeholder={placeholder}
                className="rounded-xl border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white dark:bg-slate-950 h-11 px-4"
               />
            </div>
          </FormControl>
          {description && (
            <FormDescription className="text-[10px] text-gray-400">
              {description}
            </FormDescription>
          )}
          <FormMessage className="text-[10px] font-bold text-red-500" />
        </FormItem>
      )}
    />
  );
}
