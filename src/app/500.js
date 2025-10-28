

export default function Custom500() {
  return (
    <section className="bg-gradient-to-b from-[#eaf3ff] via-transparent to-transparent px-6 lg:px-22 md:px-10 py-40">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-[28px] md:text-[46px] Primary-font uppercase leading-tight bg-gradient-to-r from-[#0065EC] via-[#45606E] to-[#001568] bg-clip-text text-transparent">
          Oops! Something went wrong.
        </h2>
        <p className="py-4 text-[#0065EC] ">
          We're experiencing some technical difficulties. Please try again later. If the problem persists, contact our support team.
        </p>
        <button
          onClick={() => window.location.reload()}
          className=" w-fit uppercase Primary-font px-4 py-2.5 mb-2 border border-[#0065EC] text-[#0065EC] text-sm cursor-pointer transition-colors duration-600 group-hover:bg-[#001568] group-hover:text-white"
        >
          Refresh Page
        </button>
      </div>
    </section>
  )
}