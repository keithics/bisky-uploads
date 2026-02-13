export type UploadConstraint = {
  maxFileSizeBytes: number;
  maxFiles: number;
  allowedMimeTypes: string[];
};

export const createUploadConstraint = (input: UploadConstraint): UploadConstraint => ({
  ...input,
  allowedMimeTypes: [...input.allowedMimeTypes],
});

export const isAllowedMimeType = (
  mimeType: string,
  constraints: UploadConstraint,
): boolean => constraints.allowedMimeTypes.includes(mimeType);
