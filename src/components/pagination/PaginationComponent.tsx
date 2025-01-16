import {useSearchParams} from "react-router-dom";
import "./PaginationStyle.css";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const handlePrev = () => {
        const currPage = query.get('page');
        if (currPage) {
            let currentPage = +currPage;
            if (currentPage > 1) {
                setQuery({page: (--currentPage).toString()});
            }
        }
    };

    const handleNext = () => {
        const currPage = query.get('page');
        if (currPage) {
            let currentPage = +currPage;
            setQuery({page: (++currentPage).toString()});
        }
    };

    return (
        <div className="pagination">
            <button
                onClick={handlePrev}
                disabled={query.get('page') === '1'}
            >
                Prev
            </button>

            <button onClick={handleNext}>
                Next
            </button>
        </div>
    );
};
