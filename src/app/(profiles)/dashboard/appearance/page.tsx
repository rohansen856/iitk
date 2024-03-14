import { Separator } from "@/components/ui/separator"

import { AppearanceForm } from "./appearance-form"

export default function SettingsAppearancePage() {
    return (
        <div className="flex w-full flex-col items-center px-4">
            <div className="w-full max-w-[600px] space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Appearance</h3>
                    <p className="text-sm text-muted-foreground">
                        Customize the appearance of the app. Automatically
                        switch between day and night themes.
                    </p>
                </div>
                <Separator />
                <AppearanceForm />
            </div>
        </div>
    )
}
