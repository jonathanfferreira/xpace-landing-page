import React from 'react';
import { EnrollmentModal, EnrollmentModalProps } from '../EnrollmentFunnel/EnrollmentModal';

export type QuizModalProps = EnrollmentModalProps;

/**
 * QuizModal re-exports the modern deterministic EnrollmentModal
 * ensuring full backwards compatibility with legacy routes and components.
 */
export const QuizModal: React.FC<QuizModalProps> = (props) => {
  return <EnrollmentModal {...props} />;
};
