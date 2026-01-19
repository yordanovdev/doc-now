import { Typography } from "@/components/ui/typography"


interface FeatureCardProps {
    icon: string
    title: string
}

export const FeatureCard = ({ icon, title }: FeatureCardProps) => {
    return (
        <div className="flex flex-col items-center text-center w-47.5 sm:w-full md:w-42.5">
            <div className="mb-4">
                <img src={icon} alt={title} className="w-12 h-12" />
            </div>
            <Typography variant="p" className="text-sm text-foreground/70 text-center">
                {title}
            </Typography>
        </div>
    )
}
