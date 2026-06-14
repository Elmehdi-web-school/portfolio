export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-theme-bg dark:bg-theme-dark-bg" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(31,111,120,0.12)_0%,rgba(248,247,242,0)_28%,rgba(199,123,56,0.10)_68%,rgba(122,155,104,0.12)_100%)] dark:bg-[linear-gradient(135deg,rgba(121,195,196,0.12)_0%,rgba(16,19,18,0)_32%,rgba(227,161,94,0.10)_70%,rgba(167,199,123,0.10)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[44rem] bg-[linear-gradient(180deg,rgba(239,238,231,0.92)_0%,rgba(239,238,231,0.42)_44%,rgba(248,247,242,0)_78%)] dark:bg-[linear-gradient(180deg,rgba(23,27,26,0.95)_0%,rgba(23,27,26,0.55)_48%,rgba(16,19,18,0)_78%)]" />
      <div className="absolute inset-0 opacity-[0.30] dark:opacity-[0.18] bg-[linear-gradient(#DFDCD0_1px,transparent_1px),linear-gradient(90deg,#DFDCD0_1px,transparent_1px)] bg-[size:92px_92px] dark:bg-[linear-gradient(#2C3632_1px,transparent_1px),linear-gradient(90deg,#2C3632_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,247,242,0.86)_0%,rgba(248,247,242,0.18)_46%,rgba(248,247,242,0.86)_100%)] dark:bg-[linear-gradient(90deg,rgba(16,19,18,0.92)_0%,rgba(16,19,18,0.18)_46%,rgba(16,19,18,0.92)_100%)]" />
    </div>
  )
}
