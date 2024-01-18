import { useRouter } from "next/router";

export default function ProductPage() {
    const router = useRouter();
    return (
        <>
            <style jsx>{`
                .eezee{
                    color: #2A64DB;
                    font-size: 16px;
                }
            `}</style>

            <p className="eezee">
                This is your product page
            </p>

            <p className="eezee">
                This is your dynamic product id: <strong>{router.query.productId}</strong>
            </p>
        </>
    )
}