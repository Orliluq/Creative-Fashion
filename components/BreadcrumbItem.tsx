import Link from 'next/link';

const BreadcrumbItem = ({ children, href, isCurrent, ...props }: any) => {
  const breadName = children.replace('%20', ' ');
  return (
    <li {...props}>
      {isCurrent ? (
        <p>{breadName}</p>
      ) : (
        <Link href={href} passHref>
          <div
            className={isCurrent ? 'text-black' : undefined}
            aria-current={isCurrent ? 'page' : 'false'}
          >
            {breadName}
          </div>
        </Link>
      )}
    </li>
  );
};

export default BreadcrumbItem;
