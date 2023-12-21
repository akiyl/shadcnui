import * as React from "react";
import Link from "next/link";
const DashBoard = () => {
  return (
    <>
      <div>
        <div className="flex justify-between text-xs">
          {" "}
          <button> expand</button>
          <div className="inline-flex gap-2">
            <Link href="">OverView</Link>
            <Link href="">Customers</Link>
            <Link href="">Products</Link>
            <Link href=""> Settings</Link>{" "}
          </div>
          <span>
            <input type="text" placeholder="Search..." />
            <button>
              <span>[P]</span>
            </button>
          </span>
        </div>
        <div>
          <h2>Dashboard </h2>
          <div>
            <div>
              <button> date</button>
            </div>
            <button> download</button>
          </div>
        </div>
        <div>
          <Link href="">Overview</Link>
          <Link href="">Analyistcs</Link>
          <Link href="">Reports</Link>
          <Link href="">Notifications</Link>
        </div>

        <div>
          <div>
            <div>
              <h2> Total revenue</h2>
              <span>$</span>
            </div>
            <div>$45,231.89</div>
            <span> +20.1% from last month</span>
          </div>{" "}
          <div>
            <div>
              <h2> Subscriptions</h2>
              <span>$</span>
            </div>
            <div>+2350</div>
            <span> +180.1% from last month</span>
          </div>{" "}
          <div>
            <div>
              <h2> Sales</h2>
              <span>$</span>
            </div>
            <div>+12,234</div>
            <span> +19% from last month</span>
          </div>{" "}
          <div>
            <div>
              <h2> Active Now</h2>
              <span>$</span>
            </div>
            <div>+573</div>
            <span> +201% since last hour</span>
          </div>
          <div>
            <div>
              {" "}
              <h2>OverView</h2>
              <div>graph</div>
            </div>
            <div>
              <div>
                <h3> Recent Sales</h3>
                <p>you made 265 sales this month</p>
              </div>
            </div>
            <div>
              <div>
                <span>iamge'''</span>
                <div>
                  <h4>Olivia Martin</h4>
                  <p>olivia.martin@gmail.com</p>
                </div>
                <span>+$1,999.00</span>
              </div>{" "}
              <div>
                <span>iamge'''</span>
                <div>
                  <h4>jackson lee</h4>
                  <p>jackson.lee@gmail.com</p>
                </div>
                <span>+$39.00</span>
              </div>{" "}
              <div>
                <span>iamge'''</span>
                <div>
                  <h4>Isabella nguyen</h4>
                  <p>Isabella.nguyen@gmail.com</p>
                </div>
                <span>+$299.00</span>
              </div>{" "}
              <div>
                <span>iamge'''</span>
                <div>
                  <h4>William kim</h4>
                  <p>William.kim@gmail.com</p>
                </div>
                <span>+$99.00</span>
              </div>{" "}
              <div>
                <span>iamge'''</span>
                <div>
                  <h4>sovfia davis</h4>
                  <p>Sofia.davis@gmail.com</p>
                </div>
                <span>+$39.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
