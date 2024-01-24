export default function Page({ params }: { params: { slug: string } }) {
  return <div>Itsa Post!: {params.slug}</div>
}