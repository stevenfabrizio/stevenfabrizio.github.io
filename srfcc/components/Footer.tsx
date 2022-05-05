import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <span className="or">or</span>

      <div className="my-email">
        <span
          className="gmx-email"
          title="Click to copy to clipboard"
          onClick={() => {
            navigator.clipboard.writeText('shfabrizio@gmx.com');
          }}
        >
          shfabrizio@gmx.com
        </span>
      </div>

      <div className="footer-icons">
        <div></div>

        <div className="github-icon">
          <a
            title="github"
            target="_blank"
            href="https://github.com/stevenfabrizio?tab=repositories"
          >
            <svg
              height="32"
              fill={'rgb(234, 238, 233)'}
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g id="Github_1_">
                  <path
                    d="M16,0C7.2,0,0,7.2,0,16       c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C32,7.2,24.8,0,16,0z M20,29.7c0-0.1,0-0.2,0-0.3c0-0.5,0-2.3,0-4.4       c0-1.5-0.5-2.5-1.1-3c3.6-0.4,7.3-1.8,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6       c-1.3-0.4-2.6-0.5-4-0.5c-1.4,0-2.7,0.2-4,0.5C8.9,5.2,7.6,5.6,7.6,5.6C6.7,7.8,7.3,9.5,7.4,9.9c-1,1.1-1.6,2.5-1.6,4.3       c0,6.1,3.7,7.5,7.3,7.9c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1       c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1c0,1.3,0,2.3,0,2.7c0,0.1,0,0.2,0,0.2C6.2,27.9,2,22.6,2,16.3c0-7.7,6.3-14,14-14       c7.7,0,14,6.3,14,14C30,22.6,25.8,27.9,20,29.7z"
                    id="Github"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>

        <div className="resume">
          <a
            title="resume"
            target="_blank"
            href="https://cdn.discordapp.com/attachments/840740146176851979/943093696713330729/resumehaha.pdf"
          >
            <svg fill={'rgb(234, 238, 233)'} viewBox="0 0 512 512">
              <path d="M485.88,512H26.12V0h293L485.88,161.64ZM44.12,494H467.88V169.26L311.82,18H44.12Z" />

              <polygon points="477.08 174.17 306.66 174.17 306.66 8.96 324.66 8.96 324.66 156.17 477.08 156.17 477.08 174.17" />

              <path d="M170,182a68,68,0,1,1,68-68A68.08,68.08,0,0,1,170,182Zm0-118a50,50,0,1,0,50,50A50.06,50.06,0,0,0,170,64Z" />

              <path d="M257.83,230h-18V209.67a35,35,0,0,0-35-35h-5.17l-6.1-10.46,11.27-6.58v-1l1.6,0,2.67-1.56,1,1.8a53.07,53.07,0,0,1,47.68,52.73Z" />

              <path d="M104.83,230h-18V209.67a53.07,53.07,0,0,1,48.85-52.84l2.87-3.18,13.38,12-8.08,9h-4a35,35,0,0,0-35,35Z" />

              <rect x="87" y="261.5" width="338" height="18" />

              <rect x="87" y="315.83" width="338" height="18" />

              <rect x="87" y="370.17" width="338" height="18" />

              <rect x="87" y="424.5" width="176.67" height="18" />
            </svg>
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
