import { useState, useEffect } from 'react';
export default function useProducts({ checked }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true); // 로딩 시작
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then(res => res.json())
    .then(data => {
      // console.log('세팅');
      setProducts(data);
    })
    .catch(() => {
      console.log('error');
    })
    .finally(() => {
      setLoading(false); // 로딩 완료
    });
    return () => {
      console.log('청소');
    }
  }, [checked]);
  return [ loading, products ];
}
