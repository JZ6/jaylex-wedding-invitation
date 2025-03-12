import styled from '@emotion/styled';

export const DateHeading = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 1.5rem;
  margin: 0px 0px 20px 0px;
  color: #608bc1;
  white-space: pre-line;
`;

export const Heading1 = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 1.5rem;
  margin: 10px;
  color: #608bc1;
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  line-height: 1;
  margin: 0;
  color: #133e87;
  white-space: pre-line;
  padding-bottom: 10px;
`;

export const Paragraph = styled.p`
  line-height: 2.2rem;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;

export function createHtmlDiv(__html: string) {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{
        __html,
      }}></div>
  );
}
