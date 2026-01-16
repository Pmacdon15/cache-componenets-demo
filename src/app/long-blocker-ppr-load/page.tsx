import Link from 'next/link'
import { Suspense } from 'react'
import CachedContent from '@/components/cached-content'
import DynamicContent from '@/components/dynamic-content'

export default function Page() {
	return (
		<div className="container">
			<h1 className="mb-4 text-center font-bold text-2xl">
				PPR Load with Suspense
			</h1>
			<p className="mb-8 text-center">
				This page demonstrates how Partial Prerendering Cache
				Components(PPR) works with Suspense to load dynamic content.
			</p>
			<div className="space-y-8">
				<div className="rounded-lg border border-gray-300 border-dashed p-4">
					<h2 className="mb-2 font-semibold text-xl">
						Dynamic content with fallback
					</h2>
					<Suspense
						fallback={
							<p className="text-blue-500">
								Loading dynamic content with a fallback...
							</p>
						}
					>
						<DynamicContent />
					</Suspense>
				</div>
				<div className="rounded-lg border border-gray-300 border-dashed p-4">
					<h2 className="mb-2 font-semibold text-xl">
						Dynamic content without Fallback
					</h2>
					<Suspense>
						<DynamicContent />
					</Suspense>
				</div>
				<div className="rounded-lg border border-gray-300 border-dashed p-4">
					<h2 className="mb-2 font-semibold text-xl">
						Dynamic cached content
					</h2>
					
						<CachedContent />
				
				</div>
			</div>
			<div className="mt-8 text-center">
				<Link className="w-full md:w-auto" href="/">
					<button type="button">Back to Home</button>
				</Link>
			</div>
		</div>
	)
}
