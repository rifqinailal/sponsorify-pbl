import { Badge } from "@/components/ui/badge"
import { CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardSponsor() {
    return (
        <Card className="w-full max-w-sm min-w-[288px] md:min-w-full">
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <img
                            alt="Sponsor avatar"
                            className="rounded-full"
                            height="40"
                            src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            style={{
                                aspectRatio: "40/40",
                                objectFit: "cover",
                            }}
                            width="40"
                        />
                        <div className="text-sm font-medium leading-none">Sponsor Name</div>
                    </div>
                    <Badge className="text-xs hidden md:block">Category</Badge>
                </div>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <div className="text-sm font-medium">About</div>
                    <p className="text-sm text-gray-500">
                        Description of the sponsor. This is a placeholder text that can be used to describe the sponsor and their
                        services.
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex flex-col md:flex-row justify-between w-full gap-2 md:gap-4">
                    <Button className="w-full" variant="outline">
                        View Details
                    </Button>
                    <Button className="w-full">Upload</Button>
                </div>


            </CardFooter>
        </Card>
    )
}
