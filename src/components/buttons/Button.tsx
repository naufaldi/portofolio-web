import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variants?: 'primary' | 'secondary';
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className = '',
  variants = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2 px-4 rounded text-sm sm:text-tiny font-bold hover:text-primary-400 animated-underline',
        'border ',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-dark-200 text-gray-300 border-dark-200 hover:bg-dark-100 hover:text-gray-200 hover:border-dark-100':
            variants === 'primary',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark':
            variants === 'secondary',
        },
        className
      )}
    >
      {children}
    </button>
  );
}
