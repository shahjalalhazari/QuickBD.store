"use client"
import { useHeader } from '@/hooks/useDashboardHeader';
import { useEffect } from 'react';

const PageHeaderSetter = ({ heading, subheading }) => {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader({
      heading,
      subheading,
    });
  }, [heading, subheading, setHeader]);

  return null;
};

export default PageHeaderSetter;